import Avatar from "../atomos/Avatar";
import Parrafo from "../atomos/Parrafo";

function TestimonioImgP({texto,  dirImg, altImg, avatarName,plan}) {
    return (<>
        <Parrafo texto={texto}/>
        <Avatar dirImg={dirImg} altImg={altImg} avatarName={avatarName}/>
        <strong>Plan {plan}</strong>
    </>  );
}

export default TestimonioImgP;