import {getLayout} from "../components/DefaultLayout";

const IndexPage = () => (
  <div>
    <div className="hero">
      <h1 className="title">Next.js + Tailwind CSS</h1>
    </div>
  </div>
);

IndexPage.title = 'CoreSkills';
IndexPage.getLayout = getLayout;

export default IndexPage;
