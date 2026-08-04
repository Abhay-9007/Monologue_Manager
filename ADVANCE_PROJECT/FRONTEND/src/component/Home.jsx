
// import {Link} from "react-router-dom"

// function Home(){
//     return(
//         <>
//         <h1> This is Home Page... </h1>
//         <h1> What do you wanna do??? </h1>
//         <Link to="/login"> login </Link> <br/>
//         <Link to="/api/auth/register"> register </Link> <br/>
//         <Link to="/create"> create </Link> <br/>
//         <Link to="/data"> see data</Link> <br/>
//         {/* <h1> login </h1>
//         <h1> register </h1>
//         <h1> create </h1>
//         <h1> your data </h1> */}

//         <hr/>

//         <section className= "flex justify-center align-center widht-100vw hight-100vh bg-blue-300">
//             <p>Abhay here...</p>
//         </section>

        
//         </>

//     )
// }



// export default Home


import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6 border-b border-slate-800">
        <h1 className="text-3xl font-bold text-indigo-400">
          Monologue
        </h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-5 py-2 rounded-lg hover:bg-slate-800 duration-300"
          >
            Login
          </Link>

          <Link
            to="/api/auth/register"
            className="bg-indigo-600 px-5 py-2 rounded-lg hover:bg-indigo-500 duration-300"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-6 py-24">

        <h1 className="text-6xl font-bold leading-tight">
          Your Thoughts.
          <br />
          <span className="text-indigo-400">
            Your Space.
          </span>
          <br />
          Your Story.
        </h1>

        <p className="max-w-3xl mt-8 text-xl text-gray-400">
          Monologue is a completely free and secure daily journaling
          platform where you can write your thoughts, track your moods,
          record memories, and reflect on your personal growth.
        </p>

        <div className="flex gap-6 mt-12">

          <Link
            to="/create"
            className="bg-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:scale-105 duration-300"
          >
            ✍ Start Writing
          </Link>

          <Link
            to="/data"
            className="border border-indigo-500 px-8 py-4 rounded-xl text-lg hover:bg-indigo-600 duration-300"
          >
            📖 My Journal
          </Link>

        </div>

      </section>

      {/* Why Journal */}
      <section className="max-w-6xl mx-auto py-20 px-8">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Journal?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-900 p-8 rounded-2xl hover:-translate-y-2 duration-300">
            <div className="text-5xl">🧠</div>
            <h3 className="text-2xl font-semibold mt-5">
              Clear Your Mind
            </h3>
            <p className="text-gray-400 mt-3">
              Organize your thoughts and reduce mental clutter by writing
              every day.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl hover:-translate-y-2 duration-300">
            <div className="text-5xl">💙</div>
            <h3 className="text-2xl font-semibold mt-5">
              Reduce Stress
            </h3>
            <p className="text-gray-400 mt-3">
              Express your emotions freely and improve your mental
              well-being.
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl hover:-translate-y-2 duration-300">
            <div className="text-5xl">📈</div>
            <h3 className="text-2xl font-semibold mt-5">
              Track Growth
            </h3>
            <p className="text-gray-400 mt-3">
              Watch your progress over months and years by revisiting your
              memories.
            </p>
          </div>

        </div>

      </section>

      {/* Features */}
      <section className="bg-slate-900 py-20">

        <h2 className="text-4xl font-bold text-center mb-16">
          Features
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-8">

          <div className="text-center">
            <div className="text-5xl">📖</div>
            <h3 className="mt-3 text-xl font-semibold">
              Daily Journal
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">😊</div>
            <h3 className="mt-3 text-xl font-semibold">
              Mood Tracking
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">⭐</div>
            <h3 className="mt-3 text-xl font-semibold">
              Special Moments
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">📅</div>
            <h3 className="mt-3 text-xl font-semibold">
              Weekly Review
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">🔍</div>
            <h3 className="mt-3 text-xl font-semibold">
              Smart Search
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">🔒</div>
            <h3 className="mt-3 text-xl font-semibold">
              Secure
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">☁️</div>
            <h3 className="mt-3 text-xl font-semibold">
              Cloud Storage
            </h3>
          </div>

          <div className="text-center">
            <div className="text-5xl">💯</div>
            <h3 className="mt-3 text-xl font-semibold">
              Completely Free
            </h3>
          </div>

        </div>

      </section>

      {/* Call to Action */}
      <section className="py-24 text-center px-6">

        <h2 className="text-5xl font-bold">
          Start Writing Today
        </h2>

        <p className="text-gray-400 mt-6 text-xl max-w-2xl mx-auto">
          Every great story begins with a single page. Capture your
          thoughts, preserve your memories, and grow one journal entry at
          a time.
        </p>

        <Link
          to="/create"
          className="inline-block mt-12 bg-indigo-600 px-10 py-4 rounded-xl text-xl font-semibold hover:scale-105 duration-300"
        >
          🚀 Start Journaling
        </Link>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-gray-500">
        © 2026 Monologue • 100% Free • Private • Secure
      </footer>

    </div>
  );
}

export default Home;
