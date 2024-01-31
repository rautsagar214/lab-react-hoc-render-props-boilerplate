import './App.css';
import LikeImgHoc from './components/HOC/LikeImgHoc';
import LikePostHoc from './components/HOC/LikePostHoc';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import LikeImageProps from './components/RenderProps/LikeImage.props';
import LikePostProps from './components/RenderProps/LikePostProps';

function App() {
  return (
    <div>
      <h3>Some Blog Post using hoc</h3>
      <div className='buttons'>
        <LikeImgHoc/>
        <LikePostHoc/>
      </div>
      <div>
        <h3>Original blog post</h3>
        <LikeImage/>
        <LikePost/>
      </div>
      <div>
        <h3>Blog Post using render props</h3>
        <LikeImageProps/>
        <LikePostProps/>
      </div>
    </div>
  );
}

export default App;
