import {getLayout} from "../components/DefaultLayout";

const IndexPage = () => (
  <div>
    <div className="hero">
      <h1 className="text-5xl text-center text-gray-900">Next.js + TailwindUI</h1>
    </div>
  </div>
);

IndexPage.title = 'CoreSkills';
IndexPage.getLayout = getLayout;

export default IndexPage;
