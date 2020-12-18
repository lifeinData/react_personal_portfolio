import selfImg from '../media/pictures/self-image.png';
import linkedinIcon from '../media/pictures/linkedinIcon.png';

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
                <div style={buttonDiv}>
                  <img src={linkedinIcon} style={{height: "35px", width: "35px", marginRight: "7px"}}/>
                  <p style={{paddingTop:"4px"}}> Linkedin </p>
                </div>
              </a>
            </li>
            <li><a href="#" class="btn-header">3D Button</a></li>
            <li><a href="#" class="btn-header">3D Button</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
)
