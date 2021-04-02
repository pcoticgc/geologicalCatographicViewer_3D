
class Perspective_3d_2D 
{
  constructor(_idButton_2D, _idButton_3D, _functionValuePitch ) 
  {
    this.idButton_2D = _idButton_2D
    this.idButton_3D = _idButton_3D
    this.functionValuePitch = _functionValuePitch
  }

  getFunctionValuePitch() {
    return  this.functionValuePitch
  }

  setFunctionValuePitch(_functionValuePitch) {
    this.FunctionValuePitch = _functionValuePitch
  }

  checkFunctionValuePitch (_functionValuePitch){
    return (_functionValuePitch != 0)? true :false;
  }
  
  showIdButton_2D_3D (_functionValuePitch) {
    if(_functionValuePitch == true) {
      document.getElementById(this.idButton_3D).style.display = "none"
      document.getElementById(this.idButton_2D).style.display = "block"
    } 
    else {
      document.getElementById(this.idButton_3D).style.display = "block"
      document.getElementById(this.idButton_2D).style.display = "none"
    } 
  }

  disableEnableIdButton_2d(){ 
    document.getElementById(this.idButton_2D).onclick = ()=> {
    document.getElementById(this.idButton_3D).style.display = "block";
    document.getElementById(this.idButton_2D).style.display = "none";
    map.easeTo({ pitch: 0 });
    }
  }
  disableEnableIdButton_3d(){
    document.getElementById(this.idButton_3D).onclick = ()=> {
    document.getElementById(this.idButton_3D).style.display = "none";
    document.getElementById(this.idButton_2D).style.display = "block";
    map.easeTo({ pitch: 70 });
    }
  } 
}

/* const perspective_3d_2D = new Perspective_3d_2D("section__Widgets--view_2d_3d--2d", "section__Widgets--view_2d_3d--3d")
perspective_3d_2D.disableEnableidButton_2d()
perspective_3d_2D.disableEnableidButton_3d()

const idButton_2D_3D = map.on('mouseup', function (event) {
  let _FunctionValuePitch = perspective_3d_2D.getFunctionValuePitch()
  let checValueP = perspective_3d_2D.checkFunctionValuePitch(_FunctionValuePitch)
  perspective_3d_2D.showidButton_2D_3D(checValueP)
})  */
export default Perspective_3d_2D;

