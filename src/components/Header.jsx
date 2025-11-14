const Header = () => {
  return (
    <div className="bg-[#410058] w-full h-12 px-3 py-1 border-b box-border border-b-[#1a193d] flex justify-between items-center">
      
      <div className="left justify-center items-center flex">
        <h3 className="text-slate-50 font-bold">Project Management App</h3>
      </div>

      <div className="right flex items-center space-x-4">
        <span className="text-white">ABM Noman</span>
        <img
          src="https://placehold.co/28x28"
          alt="User"
          className="rounded-full"
        />
      </div>

    </div>
  );
};

export default Header;
