import selfImg from '../media/pictures/self-image.png';
import linkedinIcon from '../media/pictures/linkedinIcon.png';
// import githubIcon from '../media/pictures/githubIcon.png'
const outerDiv = {
  display:"flex",
  "justify-content":"center"
}
const innerDiv = {
  display:"inherit",
  "align-items":"center"
}

const buttonDiv = {
  display: "flex"
}

export default (
  <section id="header">
    <div className="inner">
      <div style={outerDiv}>
        <img id="self-img" src={selfImg}/>
        <div style={innerDiv}>
          <ul>
            <li>
              <a id="linkedin-part" href="https://www.linkedin.com/in/jimmy-qiu-b5606a96" className="btn-header">
                <div style={{...buttonDiv, ...{'marginTop' : '2px'}}}>
                  <img src={linkedinIcon} style={{height: "35px", width: "35px", marginRight: "7px"}}/>
                  <p style={{paddingTop:"4px"}}>Linkedin</p>
                </div>
              </a>
            </li>
            <li>
              <a id="github-part" href="https://github.com/lifeinData" className="btn-header">
                <div style={buttonDiv}>
                  <i class="fa fa-github" style={{fontSize:"41px", color:"#8f01fbe8", marginRight: "7px"}}></i>
                  <p style={{paddingTop:"6px"}}>Github</p>
                </div>
              </a>
            </li>
            <li><a href="#" class="btn-header">3D Button</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)
