import SearchBar from "@/app/components/SearchBar";

const Header = () => {
  return (
    <div className="h-64 bg-gradient-to-r from-blue-950 to-cyan-500 p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-2">
          Find your table for any occasion
        </h1>
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;
