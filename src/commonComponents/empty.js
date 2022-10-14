import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import './empty.css'

function FlashPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(()=>{
      navigate("/landing");
    },2000)
  });

  return(
    <div className="loading_box">
    <ReactLoading className="loading_icon" type="cylon" height={'40%'} width={'20%'} />
    </div>
  )
}
export default FlashPage;
