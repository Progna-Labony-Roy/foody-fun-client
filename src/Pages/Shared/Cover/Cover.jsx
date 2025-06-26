const Cover = ({img,title,description}) =>{
    return (
        <div
  className="hero h-[500px]"
  style={{
    backgroundImage:
      `url("${img}")`,
  }}
>
  <div className="hero-overlay bg-slate-900 bg-opacity-50"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 lg:text-4xl lg:font-semibold uppercase">{title}</h1>
      <p className="mb-5">
        {description}
      </p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
    );
};

export default Cover;