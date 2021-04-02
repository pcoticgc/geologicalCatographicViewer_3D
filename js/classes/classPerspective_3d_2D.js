
class Perspective_3d_2D {
  constructor(_button_2D, _button_3D, ) {
    this.button_2D = _button_2D
    this.button_3D = _button_3D
  }

  getValuePitch() {
    this.valuePitch = map.getPitch()
    return  this.valuePitch
  }

  setValuePitch(_valuePitch) {
    this.valuePitch = _valuePitch
  }

  checkValuePitch (_valuePitch){
    return (_valuePitch != 0)? true :false;
  }
  
  showButton_2D_3D (_valuePitch) {
    if(_valuePitch == true) {
      document.getElementById(this.button_3D).style.display = "none"
      document.getElementById(this.button_2D).style.display = "block"
    } 
    else {
      document.getElementById(this.button_3D).style.display = "block"
      document.getElementById(this.button_2D).style.display = "none"
    } 
  }

  disableEnableButton_2d(){ 
    document.getElementById(this.button_2D).onclick = ()=> {
    document.getElementById(this.button_3D).style.display = "block";
    document.getElementById(this.button_2D).style.display = "none";
    map.easeTo({ pitch: 0 });
    }
  }
  disableEnableButton_3d(){
    document.getElementById(this.button_3D).onclick = ()=> {
    document.getElementById(this.button_3D).style.display = "none";
    document.getElementById(this.button_2D).style.display = "block";
    map.easeTo({ pitch: 70 });
    }
  } 
}

const perspective_3d_2D = new Perspective_3d_2D("section__Widgets--view_2d_3d--2d", "section__Widgets--view_2d_3d--3d")
perspective_3d_2D.disableEnableButton_2d()
perspective_3d_2D.disableEnableButton_3d()

const button_2D_3D = map.on('mouseup', function (event) {
  let _valuePitch = perspective_3d_2D.getValuePitch()
  let checValueP = perspective_3d_2D.checkValuePitch(_valuePitch)
  perspective_3d_2D.showButton_2D_3D(checValueP)
}) 
/* export default Perspective_3d_2D; */

