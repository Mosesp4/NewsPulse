import Body from "./components/Body"

function App() {
	return (
		<div className="min-h-screen flex flex-col bg-[#0b0912]  py-6 relative sm:px-16 px-12
		text-white overflow-hidden  justify-between align-middle">
		 {/* gradients */}
		 <div className="gradient-01 z-0 absolute"></div>
		 <div className="gradient-02 z-0 absolute"></div>

		<Body />	

	</div>
	)
}

export default App
