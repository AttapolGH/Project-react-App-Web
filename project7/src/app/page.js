'use client';
import '@/App.css'
import data from '@/data.js';
import {useState} from "react";
import SingleContent from '@/components/SingleContent';
function App() {
  const [content,setContent] = useState(data)
  return(
  <main>
        <div className="container"> 
          <h3 color='red'>เครื่องมือพัฒนาเว็บปี 2023</h3>
          <section>
              {content.map((data)=>{//ดึงข้อมูลกำหนดเนื้อหาให้เข้าไปทำงานใน singlcontent
                  return <SingleContent key={data.id} {...data}/>//...data เรียก title และdecription ใน data
              })}
          </section>
        </div>
      </main>
  );
}
export default App;