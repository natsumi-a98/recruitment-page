import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { StepIconProps } from "@mui/material/StepIcon";
import { styled } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import { StepConnector } from "@mui/material";

// カスタムステップアイコンのスタイル
const CustomStepIcon = styled("div")<StepIconProps>(
  ({ active, completed }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: completed ? "#00aeef" : active ? "#00aeef" : "#b0bec5", // 完了したステップは青色、未完了は灰色
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    position: "relative",
    "& svg": {
      position: "absolute",
      fontSize: 18,
    },
  })
);

// ステップラベルのスタイル
const CustomStepLabel = styled(StepLabel, {
  shouldForwardProp: (prop) => prop !== "active" && prop !== "completed", // 'active' と 'completed' プロパティを除外
})<{
  active?: boolean;
  completed?: boolean;
}>(({ active, completed }) => ({
  "& .MuiStepLabel-label": {
    fontSize: "20px",
    fontWeight: "bold",
    color: active || completed ? "#ffffff" : "#b0bec5", // アクティブまたは完了したステップのラベルは白、それ以外は灰色
  },
}));


// ステップコンテンツのスタイル
const CustomStepContent = styled(StepContent)(() => ({
  marginLeft: 15,
  paddingLeft: 20,
  borderLeft: "2px solid #b0bec5",
}));

// ステップコネクタースタイル
const CustomStepConnector = styled(StepConnector)(() => ({
  marginLeft: 15,
  borderLeft: "1.5px solid #b0bec5",
}));

// ステップごとのラベルと説明
const steps = [
  {
    label: "内定〜入社",
    description: ["タイピング練習", "Progate等 各自学習", "事前リサーチ"],
  },
  {
    label: "入社〜1ヶ月",
    description: ["現場稼働開始", "21〜22日間稼働", "うぇぶくり開始"],
  },
  {
    label: "2ヶ月",
    description: [
      "うぇぶくり コース①",
      "HTML, CSS, JavaScript, JQuery",
      "(終了目安)",
    ],
  },
  {
    label: "3ヶ月",
    description: ["うぇぶくり コース②", "PHP, Git", "(終了目安)"],
  },
  {
    label: "4ヶ月",
    description: ["管理システムWebアプリ", "制作"],
  },
  {
    label: "5〜8ヶ月",
    description: ["チーム開発"],
  },
];

const VerticalLinearStepper: React.FC = () => {
  // 現在のステップを管理
  const [activeStep, setActiveStep] = React.useState<number>(0);
  // 次のステップに進む関数
  const handleNext = () => setActiveStep((prev) => prev + 1);
  // 前のステップに戻る関数
  const handleBack = () => setActiveStep((prev) => prev - 1);
  // ステップをリセットする関数
  const handleReset = () => setActiveStep(0);

  return (
    <Box sx={{ width: 400 }}>
      <Stepper
        activeStep={activeStep}
        orientation="vertical"
        connector={<CustomStepConnector />}
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
            {/* ステップラベルのカスタム表示 */}
            <CustomStepLabel
              active={index === activeStep}
              completed={index < activeStep}
              icon={
                <CustomStepIcon
                  active={index === activeStep}
                  completed={index < activeStep}
                  icon={undefined}
                >
                  {/* 完了したステップにはチェックアイコンを表示、未完了は番号を表示 */}
                  {index < activeStep ? (
                    <CheckIcon sx={{ fontSize: 18, color: "#ffffff" }} />
                  ) : (
                    <div>{index + 1}</div>
                  )}
                </CustomStepIcon>
              }
              optional={
                index === steps.length - 1 ? (
                  <Typography
                    variant="caption"
                    sx={{ color: "#0e0e0e", fontSize: "" }}
                  >
                    Last step
                  </Typography>
                ) : null
              }
            >
              {step.label}
            </CustomStepLabel>

            {/* ステップの詳細情報 */}
            <CustomStepContent>
              <Box>
                {step.description.map((line, i) => (
                  // 各ステップの詳細を表示
                  <Typography key={i}>{line}</Typography>
                ))}
              </Box>
              <Box sx={{ mb: 2 }}>
                {/* 次に進むボタン */}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1, backgroundColor: "#00aeef" }}
                >
                  {index === steps.length - 1 ? "Finish" : "Continue"}
                </Button>
                {/* 前に戻るボタン */}
                <Button
                  // 最初のステップでは戻れない
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </Box>
            </CustomStepContent>
          </Step>
        ))}
      </Stepper>

      {/* 最終ステップが完了した後のメッセージ */}
      {activeStep === steps.length && (
        <Paper
          square
          elevation={0}
          sx={{ p: 3, backgroundColor: "transparent", color: "#0e0e0e" }}
        >
          {["うぇぶくり卒業", "SES事業部に異動"].map((line, i) => (
            // 完了メッセージを表示
            <Typography key={i}>{line}</Typography>
          ))}
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;
