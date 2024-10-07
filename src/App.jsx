import './App.css';
import Lenis from './components/Lenis';
import Daisy from './components/Daisy';
import TopReturn from './components/TopReturn';
import Name from './components/Name';
import TodaysDate from './components/TodaysDate';
import ProjectCards from './components/ProjectCards';
import Footer from './components/Footer';


function App() {

  return (
    <>
      <Lenis /> 

      {/* Container */}
      <div className="w-full min-h-screen bg-white-500 flex flex-col align-middle items-center p-5 gap-32">

        {/* Head container */}
        <div className="w-full flex flex-col gap-5 max-w-screen-xl">

          {/* Date */}
          <div className="w-full grid grid-cols-3">
            <TodaysDate />
          </div>

          {/* Name and paragraph */}
          <Name />

        </div>

        {/* Bottom container */}
        <div className="w-full flex flex-col gap-5 max-w-screen-xl">

          {/* Month / Day */}
          <div className="flex justify-between items-center">
            <div className="uppercase text-lg">Projects</div>
            <div className="uppercase text-lg">2024</div>
          </div>

          {/* Project Grid */}
          {/* <div className="grid grid-cols-3 gap-x-5 gap-y-9  justify-items-center"> */}
          <div>

            <ProjectCards />

          </div>

        </div>

      </div>

      <TopReturn />

      <Daisy />
      <Footer />
    </>
  )
}

export default App
