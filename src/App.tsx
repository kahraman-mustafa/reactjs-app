// import DetailsCardComponent from "./components/DetailsCardComponent";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BlogDetailPage from "./components/BlogDetailPage/BlogDetailPage.tsx";
import BlogListPage from "./components/BlogListPage/BlogListPage.tsx";
import Layout from "./components/Layout/Layout.tsx";
import LandingPage from "./LandingPage.tsx"; // Mevcut giriş sayfanız (TypeScript'e uyarlayın)

const App: React.FC = () => {
  // const [formData, setFormData] = useState({name: "", email: ""});
  // const [recordData, setRecordData] = useState([]);

  console.log("process.env:", process.env);
  console.log("process.env.REACT_APP_NODE_ENV:", process.env.REACT_APP_NODE_ENV);
  console.log("process.env.REACT_APP_SERVER_BASE_URL:", process.env.REACT_APP_SERVER_BASE_URL);
  const base_url = process.env.REACT_APP_NODE_ENV === 'development' ? process.env.REACT_APP_LOCAL_BASE_URL : process.env.REACT_APP_SERVER_BASE_URL;

  // useEffect(() => {
  //   axios.get(`${base_url}getUsers`).then(res => {setRecordData(res.data)}).catch(err => alert(`Some error occured ==>${err}`));
  // }, []);

  // const handleChange = (event) => {
  //   const {name, value} = event.target;
  //   setFormData((prevFormData) => ({...prevFormData, [name]: value}));
  // };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   axios.post(`${base_url}addUser`, formData).then(res => {setFormData({name: "", email: ""}); alert("User created successfully")}).catch(err => alert(`Some error occured ==>${err}`));
  // };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:postId" element={<BlogDetailPage />} />
          {/* 404 vs. eklemek isterseniz */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
