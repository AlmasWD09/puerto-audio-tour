import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Link to={'/admin/dashboard'}>
                <h1 className="text-2xl font-Poppins font-bold text-primary">Dashboard</h1>
            </Link>
        </div>
    )
}

export default Home