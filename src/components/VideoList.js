import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map((video) => {
		if (!video.id.videoId) {
			video.id.videoId = Math.random().toString(36).substring(4)
		}
		return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />
	})

	return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList
