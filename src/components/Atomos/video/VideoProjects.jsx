import React, { useMemo, useRef, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { imagesBenefits } from "../../../utils/bd";

const previewVideos = [
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  "https://www.w3schools.com/html/mov_bbb.mp4",
  "https://cdn.coverr.co/videos/coverr-a-man-writing-in-a-notebook-1348/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-slow-motion-shot-of-a-camera-filming-a-city-scape-8138/1080p.mp4"
];

const VideoProjects = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragOffsetStartRef = useRef(0);
  const dragDeltaRef = useRef(0);

  const videos = useMemo(
    () =>
      imagesBenefits.map((item, index) => ({
        ...item,
        videoUrl: item.videoUrl || previewVideos[index % previewVideos.length],
      })),
    []
  );

  const reelVideos = useMemo(() => [...videos, ...videos, ...videos, ...videos], [videos]);

  const openVideo = (index) => {
    setActiveVideo(videos[index % videos.length]);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  const handlePointerDown = (event) => {
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    dragOffsetStartRef.current = dragOffset;
    dragDeltaRef.current = 0;
  };

  const handlePointerMove = (event) => {
    if (!isDragging) return;
    const delta = event.clientX - dragStartXRef.current;
    dragDeltaRef.current = delta;
    setDragOffset(dragOffsetStartRef.current + delta);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    dragDeltaRef.current = 0;
  };

  const handleCardClick = (event, index) => {
    if (Math.abs(dragDeltaRef.current) > 4) {
      event.preventDefault();
      return;
    }
    openVideo(index);
  };

  return (
    <div className="container__benefits" id="video-portafolio">
      <div className="container__benefits-content flex flex-col">
        <div className="container__benefits-header">
          <p className="container__benefits-eyebrow">Portafolio</p>
          <h2>Reels verticales</h2>
        </div>

        <div className="video-reel-wrapper">
          <div
            className={`video-reel-track ${isDragging ? "is-dragging" : ""}`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            style={{ transform: `translateX(${dragOffset}px)` }}
          >
            {reelVideos.map((video, index) => (
              <article
                key={`${video.title}-${index}`}
                className="video-reel-card"
                onClick={(event) => handleCardClick(event, index)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openVideo(index);
                  }
                }}
              >
                <video
                  src={video.videoUrl}
                  poster={video.url}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  className="video-reel-video"
                />
                <div className="video-reel-overlay">
                  <span>{video.title}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Modal
          open={Boolean(activeVideo)}
          onClose={closeVideo}
          aria-labelledby="video-modal-title"
          className="video-modal"
        >
          <Box className="video-modal__content" onClick={(e) => e.stopPropagation()}>
            <IconButton className="video-modal__close" onClick={closeVideo} aria-label="Cerrar video">
              <CloseIcon />
            </IconButton>
            <video
              src={activeVideo?.videoUrl}
              poster={activeVideo?.url}
              controls
              autoPlay
              playsInline
              className="video-modal__video"
            />
            <div className="video-modal__meta">
              <h3 id="video-modal-title">{activeVideo?.title}</h3>
              {activeVideo?.description && <p>{Array.isArray(activeVideo.description) ? activeVideo.description.join(" • ") : activeVideo.description}</p>}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default VideoProjects;
