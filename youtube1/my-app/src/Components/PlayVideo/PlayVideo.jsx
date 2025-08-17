import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import link from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.png'
import profile1 from '../../assets/profile1.png'
const PlayVideo = () => {
  return (
    <div className='play-video'>
           <video src={video1} controls autoPlay muted></video>
          <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
          <div className="play-video-info">
              <p>1525 Views &bull; 2 days ago </p>
              <div>
                  <span><img src={link} alt="" /> 125</span>
                  <span><img src={dislike} alt="" /> 2</span>
                  <span><img src={share} alt="" /> Share</span>
                  <span><img src={save} alt="" /> Save</span>

              </div>
          </div>

          <hr />

          <div className="publisher">
              <img src={user_profile} alt="" />
              <div>
                  <p>GreatStack</p>
                  <span>1M Subscribers</span>
              </div>
              <button>Subscribe</button>

          </div>
           <div className="video-description">
              <p>Lorem ipsum dolor, sit amet consectetur </p>
              <p> necessitatibus iusto voluptates voluptatum unde quia veniam? Iste, quia hic.</p>
              <hr />

              <h4>130 Comments</h4>

                <div className="comment">
                  <img src={profile1} alt="" />
                  <div>
                      <h3>JackNicholson <span>1 day ago</span></h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Architecto velit minima nostrum numquam. Fuga non saepe culpa
                          fugiat sint molestias? A quae deseru
                      </p>
                      <div className="comment-action">
                          <img src={link} alt="" />
                          <span>255</span>
                          <img src={dislike} alt="" />
                      </div>
                  </div>
              </div>

                <div className="comment">
                  <img src={profile1} alt="" />
                  <div>
                      <h3>JackNicholson <span>1 day ago</span></h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Architecto velit minima nostrum numquam. Fuga non saepe culpa
                          fugiat sint molestias? A quae deseru
                      </p>
                      <div className="comment-action">
                          <img src={link} alt="" />
                          <span>255</span>
                          <img src={dislike} alt="" />
                      </div>
                  </div>
              </div>

                <div className="comment">
                  <img src={profile1} alt="" />
                  <div>
                      <h3>JackNicholson <span>1 day ago</span></h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Architecto velit minima nostrum numquam. Fuga non saepe culpa
                          fugiat sint molestias? A quae deseru
                      </p>
                      <div className="comment-action">
                          <img src={link} alt="" />
                          <span>255</span>
                          <img src={dislike} alt="" />
                      </div>
                  </div>
              </div>

                <div className="comment">
                  <img src={profile1} alt="" />
                  <div>
                      <h3>JackNicholson <span>1 day ago</span></h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                          Architecto velit minima nostrum numquam. Fuga non saepe culpa
                          fugiat sint molestias? A quae deseru
                      </p>
                      <div className="comment-action">
                          <img src={link} alt="" />
                          <span>255</span>
                          <img src={dislike} alt="" />
                      </div>
                  </div>
              </div>

</div>
    </div>
  )
}

export default PlayVideo
