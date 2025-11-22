import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css";

interface CustomAudioPlayerProps {
  audioUrl: string;
  title: string;
}

export const CustomAudioPlayer = ({ audioUrl, title }: CustomAudioPlayerProps) => {
  return (
    <div className="audio-player-container">
      <AudioPlayer
        autoPlay={false}
        src={audioUrl}
        showJumpControls={true}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        layout="horizontal-reverse"
        className="custom-audio-player"
      />
    </div>
  );
};
