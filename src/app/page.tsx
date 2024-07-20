import Image from "next/image";

import Posts from "./components/Posts";

export default function Home() {
  return (
    <main >
        <h1>Food Blog</h1>
        <p>Welcome to my food blog!</p>

        
            <Posts />
            <footer>
                <p>© 2024 Food Blog</p>
            </footer>
    </main>
  );
}
