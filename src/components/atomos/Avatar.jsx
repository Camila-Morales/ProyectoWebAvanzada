
function Avatar({ dirImg, altImg, avatarName}) {
  return (
    <>
      <div>
        <img src={dirImg} alt={altImg} />
      </div>
      <strong>{avatarName}</strong>
    </>
  );
}

export default Avatar;
