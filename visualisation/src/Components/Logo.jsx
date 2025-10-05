import 'tailwindcss/tailwind.css'

function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
        <img 
          src="https://th.bing.com/th/id/ODF.7wir8lEvM1yNU-Gzu6A2nA?w=32&h=32&qlt=90&pcl=fffffa&o=6&pid=1.2" 
          alt="Logo" 
          className="w-8 h-8 object-contain"
        />
      </div>
      <h1 className="text-white text-3xl font-bold font-ubuntu tracking-tight">
        NITJ 
      </h1>
    </div>
  );
}

export default Logo;
