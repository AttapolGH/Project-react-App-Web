import React from 'react';

const Member = () => {
  return (
    <div className="Member" >
       <br/>
      <h1>สมาชิก</h1>
      <div className="form-group">
        <label htmlFor="username">ไอดี</label>
        <input type="text" id="username" placeholder="กรุณากรอกไอดี" />
      </div>

      <div className="form-group">
        <label htmlFor="password">รหัส</label>
        <input type="password" id="password" placeholder="กรุณากรอกรหัส" />
      </div>

      <p>กรุณากรอกแบบฟอร์ม</p>
      <div className="form-group">
        <label htmlFor="additionalInfo">ข้อมูลเพิ่มเติม</label>
        <textarea id="additionalInfo" rows="4" placeholder="กรอกข้อมูลที่ต้องการ"></textarea>
      </div>

      <button>สมัครสมาชิก</button>
    </div>
  );
}

export default Member;
