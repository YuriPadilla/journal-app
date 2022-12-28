import logo from './logo.svg';
import './App.css';

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Form from "./components/Form";

export default function App() {
  return (
    <>
      <Header>JOURNAL</Header>
      <main>
        <Form submitText="Create"></Form>
      </main>
      <Footer>Journal App - 2023</Footer>
    </>
  );
}
