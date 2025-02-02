const  SkillCard = ({ icon, name }) => (
    <div className="skill-card text-center flex items-center flex-col justify-center p-3 rounded shadow-sm bg-white">
      {icon}
      <h6>{name}</h6>
    </div>
  );


  export default SkillCard;