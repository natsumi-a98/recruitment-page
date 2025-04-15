import styled from "styled-components";
import { useState } from "react";
import EmployeeBox from "./employeeBox";
import EmployeeDetailFrame from "./employeeDetailFrame";

const EmployeeBoxesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;

interface Employee {
  imageUrl: string; // 社員画像
  years: number; // 入社年数
  job: string; // キャリア
  selfIntroduction: string; // 自己紹介
  aboutCompany: string; // 会社について
  goodThings: string; // 良かったところ
  message: string; // ひとこと
}

const EmployeeBoxes = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  const employees: Employee[] = [
    {
      imageUrl: "/images/男性1.png",
      years: 1,
      job: "バックエンド",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
    {
      imageUrl: "/images/女性1.png",
      years: 2,
      job: "フロントエンド",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
    {
      imageUrl: "/images/男性2.png",
      years: 3,
      job: "デザイナー",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
    {
      imageUrl: "/images/女性2.png",
      years: 4,
      job: "PM",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
    {
      imageUrl: "/images/男性3.png",
      years: 5,
      job: "QA",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
    {
      imageUrl: "/images/男性4.png",
      years: 2,
      job: "インフラ",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
    {
      imageUrl: "/images/女性3.png",
      years: 6,
      job: "セールス",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
    {
      imageUrl: "/images/女性4.png",
      years: 1,
      job: "マーケター",
      selfIntroduction: "Reactでの開発が好きで、UIの改善に取り組んでいます。",
      aboutCompany: "チャレンジを応援してくれる会社です。",
      goodThings: "働きやすい雰囲気で、フレックスタイム制度が便利です。",
      message: "あなたの個性を活かせる環境があります！",
    },
  ];

  return (
    <>
      {selectedEmployee ? (
        <EmployeeDetailFrame
          imageUrl={selectedEmployee.imageUrl}
          years={selectedEmployee.years}
          job={selectedEmployee.job}
          selfIntroduction={selectedEmployee.selfIntroduction}
          aboutCompany={selectedEmployee.aboutCompany}
          goodThings={selectedEmployee.goodThings}
          message={selectedEmployee.message}
          onClose={() => setSelectedEmployee(null)}
        />
      ) : (
        <EmployeeBoxesWrapper>
          {employees.map((emp, index) => (
            <EmployeeBox
              key={index}
              imageUrl={emp.imageUrl}
              years={emp.years}
              job={emp.job}
              onClick={() => setSelectedEmployee(emp)}
            />
          ))}
        </EmployeeBoxesWrapper>
      )}
    </>
  );
};

export default EmployeeBoxes;
