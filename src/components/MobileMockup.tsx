import {
  Signal,
  Wifi,
  Battery,
  Bell,
  Search,
  Wrench,
  Zap,
  PaintRoller,
  Hammer,
  Home,
  Calendar,
  User,
} from "lucide-react";

export default function MobileMockup() {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <div className="relative w-72 md:w-80 h-[500px] md:h-[560px] bg-black rounded-[3rem] shadow-2xl border-8 border-black overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-all duration-500 max-w-full">

        <div className="bg-slate-50 w-full h-full relative overflow-hidden flex flex-col">

          <div className="bg-blue-600 text-white px-6 pt-3 pb-1 flex justify-between items-center text-xs">
            <span>9:41</span>

            <div className="flex gap-1.5">
              <Signal size={10} />     
              <Wifi size={10} />        
              <Battery size={10} />    
            </div>
          </div>

          <div className="bg-blue-600 p-6 pb-8 rounded-b-3xl shadow-lg">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border-2 border-blue-300 bg-gradient-to-br from-blue-400 to-blue-600"></div>
                <div className="space-y-1">
                  <div className="w-12 h-2 bg-blue-200/30 rounded"></div>
                  <div className="w-20 h-3 bg-white/90 rounded"></div>
                </div>
              </div>

              <div className="p-2 bg-blue-500 rounded-full relative">
                <Bell size={18} className="text-white" />
                <span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="bg-white/20 border border-white/30 rounded-xl p-3 flex items-center gap-3">
              <Search size={16} className="text-white" />
              <div className="w-32 h-2 bg-white/30 rounded"></div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 overflow-y-auto p-5 pb-20">
            <div className="flex justify-between items-end mb-4">
              <div className="w-16 h-3 bg-gray-800 rounded"></div>
              <div className="w-12 h-2 bg-blue-600 rounded"></div>
            </div>

            {/* SERVICES */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-100 text-blue-600">
                  <Wrench size={18} />  
                </div>
                <div className="w-12 h-1.5 bg-gray-300 rounded"></div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-yellow-100 text-yellow-600">
                  <Zap size={18} />   
                </div>
                <div className="w-12 h-1.5 bg-gray-300 rounded"></div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-purple-100 text-purple-600">
                  <PaintRoller size={18} /> 
                </div>
                <div className="w-12 h-1.5 bg-gray-300 rounded"></div>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-orange-100 text-orange-600">
                  <Hammer size={18} /> 
                </div>
                <div className="w-12 h-1.5 bg-gray-300 rounded"></div>
              </div>
            </div>

            
            <div className="bg-slate-900 rounded-2xl p-5 mb-6 shadow-xl relative overflow-hidden">
              <div className="bg-yellow-500 w-20 h-4 rounded mb-3"></div>
              <div className="space-y-2 mb-3">
                <div className="w-28 h-4 bg-white/90 rounded"></div>
                <div className="w-32 h-4 bg-white/90 rounded"></div>
              </div>
              <div className="w-full h-2 bg-gray-400 rounded mb-3"></div>
              <div className="bg-white w-16 h-6 rounded-lg"></div>
              <div className="absolute -right-2 -bottom-6 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl"></div>
            </div>
          </div>

          <div className="bg-white border-t border-gray-200 px-6 py-3 pb-5 flex justify-between absolute bottom-0 w-full">

            <div className="flex flex-col items-center gap-1 text-blue-600">
              <Home size={18} />  
              <div className="w-10 h-1.5 bg-blue-600 rounded"></div>
            </div>

            <div className="flex flex-col items-center gap-1 text-gray-400">
              <Calendar size={18} />  
              <div className="w-8 h-1.5 bg-gray-300 rounded"></div>
            </div>

            <div className="flex flex-col items-center gap-1 text-gray-400">
              <User size={18} />  
              <div className="w-8 h-1.5 bg-gray-300 rounded"></div>
            </div>

          </div>

          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}