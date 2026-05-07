"use client";

import { useState } from "react";

type ChatStep = "ready" | "issue" | "method" | "documentForm" | "loading" | "done";

export default function ChatPage() {
  const [step, setStep] = useState<ChatStep>("ready");
  const [input, setInput] = useState("");

  const submitQuestion = (text?: string) => {
    const question = text || input;
    if (!question.trim()) return;

    setInput("");
    setStep("issue");
  };

  const submitInput = () => {
    if (step === "issue") setStep("method");
    else if (step === "method") setStep("documentForm");
    else if (step === "documentForm") {
      setStep("loading");
      setTimeout(() => setStep("done"), 1500);
    }
    setInput("");
  };

  return (
    <div className="relative flex min-h-full flex-col px-10 pt-8">
      <h1 className="text-3xl font-bold text-[#170013]">
        로이지 AI한테 질문 하기
      </h1>

      <div className="flex flex-1 justify-center pb-36 pt-8">
        {step === "ready" ? (
          <ReadyChat onSelect={submitQuestion} />
        ) : (
          <ChatContent step={step} setStep={setStep} />
        )}
      </div>

      <ChatInput
        input={input}
        setInput={setInput}
        onSubmit={step === "ready" ? () => submitQuestion() : submitInput}
        placeholder={step === "documentForm" ? "판매자:" : "질문을 입력해주세요."}
      />
    </div>
  );
}

function ReadyChat({ onSelect }: { onSelect: (text: string) => void }) {
  const suggestions = [
    "소송 절차는 어떻게 이루어져?",
    "당근에서 맥북을 팔았는데, 구매자가 200만원을 안 보내줘.",
    "게임 채팅에서 누가 날 모욕했어. 어떻게 하면 처벌할 수 있을까?",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-28 text-4xl">⚡</div>

      <div className="w-[850px]">
        <p className="mb-3 text-sm font-bold text-slate-500">
          로이지 AI 질문 추천
        </p>

        <div className="grid grid-cols-3 gap-3">
          {suggestions.map((text) => (
            <button
              key={text}
              onClick={() => onSelect(text)}
              className="rounded-lg border border-white/70 bg-white/45 px-4 py-3 text-left text-sm font-medium text-[#170013] shadow-sm backdrop-blur-sm hover:bg-white/70"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatContent({
  step,
  setStep,
}: {
  step: ChatStep;
  setStep: (step: ChatStep) => void;
}) {
  return (
    <div className="w-full max-w-[760px]">
      <div className="mb-6 flex justify-center gap-5 text-sm font-bold">
        <span className="rounded-full bg-white px-5 py-2 text-violet-600 shadow-sm">
          쟁점 파악
        </span>
        <span
          className={`rounded-full px-5 py-2 ${
            ["documentForm", "loading", "done"].includes(step)
              ? "bg-white text-violet-600 shadow-sm"
              : "text-slate-300"
          }`}
        >
          문서 생성
        </span>
      </div>

      <p className="mb-4 text-center text-sm text-slate-500">중고 거래 사기</p>

      {step === "issue" && <IssueAnswer setStep={setStep} />}
      {step === "method" && <MethodAnswer setStep={setStep} />}
      {step === "documentForm" && <DocumentFormAnswer />}
      {step === "loading" && <LoadingAnswer />}
      {step === "done" && <DoneAnswer />}

      {step !== "loading" && (
        <button className="mx-auto mt-8 block text-sm font-bold text-slate-500">
          ↻ 답변 재생성 하기
        </button>
      )}
    </div>
  );
}

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3 rounded-lg border border-slate-100 bg-white/60 px-5 py-4 text-sm text-[#170013] shadow-sm">
      {children}
    </div>
  );
}

function AiCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg bg-white px-7 py-6 text-sm leading-7 text-slate-700 shadow-xl shadow-violet-100">
      {children}
    </div>
  );
}

function IssueAnswer({ setStep }: { setStep: (step: ChatStep) => void }) {
  return (
    <>
      <UserBubble>
        당근에서 키보드를 팔았는데, 구매자가 30만원을 안 보내줘.
      </UserBubble>

      <AiCard>
        <p className="whitespace-pre-line">
          {`당근마켓에서 키보드를 30만 원에 팔았는데, 물건은 넘겨줬지만 상대가 아직 돈을 안 준 상황입니다.

이 경우, 돈을 받는 방법(민사)과 사기 신고(형사)를 각각 어떻게 할지 순서대로 도와드리겠습니다.

어떤 걸 원하시나요?

지금 당장 할 일
1단계: 증거 모으기
- 당근마켓 채팅 캡처
- 판매 글
- 키보드 넘겨준 증거
- 상대 이름, 전화번호, 계좌번호

2단계: 돈 달라고 공식적으로 한 기록 남기기
- 언제까지 입금해 달라는 메시지 보내기
- 가능하면 내용증명으로 한 번 더 요구`}
        </p>

        <div className="mt-5 flex gap-2">
          {["민사", "민사 + 형사", "설명만"].map((item) => (
            <button
              key={item}
              onClick={() => setStep("method")}
              className="rounded-full bg-violet-50 px-4 py-2 text-xs font-bold text-violet-600"
            >
              {item}
            </button>
          ))}
        </div>
      </AiCard>
    </>
  );
}

function MethodAnswer({ setStep }: { setStep: (step: ChatStep) => void }) {
  return (
    <>
      <UserBubble>
        일단 돈을 최대한 빨리 받고 싶어. 구매자가 중학생이라 처벌이 어려울 것 같아.
      </UserBubble>

      <AiCard>
        <p className="whitespace-pre-line">
          {`민사 절차는 ‘돈을 달라’고 법원에 공식적으로 요청하는 과정입니다.

1단계: 간단한 절차부터 ‘내용증명’ 혹은 ‘지급명령 / 소액심판’

법적 효력은 없지만 상대방에게 심리적 압박을 주고 싶다면 ‘내용증명’을,
법적 절차를 통해 돈을 돌려받고 싶다면 ‘지급명령’ 혹은 ‘소액심판’을 사용할 수 있습니다.

2단계: 법률 쟁점

중고거래 사기와 관련해서는 피해 입증 자료가 핵심입니다.
미성년자와 거래한 경우 법정대리인 문제도 함께 검토하는 것이 좋습니다.`}
        </p>

        <div className="mt-5 flex gap-2">
          {["내용증명 작성하기", "지급명령 작성하기", "소액심판 청구하기"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setStep("documentForm")}
                className="rounded-full bg-violet-50 px-4 py-2 text-xs font-bold text-violet-600 hover:bg-violet-100"
              >
                {item}
              </button>
            )
          )}
        </div>
      </AiCard>
    </>
  );
}

function DocumentFormAnswer() {
  return (
    <>
      <UserBubble>소액심판 청구하기</UserBubble>

      <AiCard>
        <p className="whitespace-pre-line">
          {`소액사건심판제도는 개인 간의 금전, 물품대금 등 비교적 금액이 크지 않은 분쟁을 빠르고 간편하게 해결하기 위한 제도입니다.

그럼 소액재판용 소장 서식을 작성해볼까요?
다음 내용을 입력해주세요.

- 김민진님의 이름, 주소, 주민등록번호, 연락처
- 구매자의 이름, 주소, 주민등록번호, 연락처
- 피해 금액
- 증거 내역
- 당근마켓 채팅 캡처
- 판매 글
- 물건을 넘겨준 증거`}
        </p>
      </AiCard>
    </>
  );
}

function LoadingAnswer() {
  return (
    <>
      <UserBubble>다음 내용이 맞아. 소장 작성해줘.</UserBubble>

      <div className="mt-28 flex flex-col items-center justify-center">
        <div className="mb-5 h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-violet-600" />
        <p className="text-lg font-bold text-[#170013]">소장 생성 중</p>
      </div>
    </>
  );
}

function DoneAnswer() {
  return (
    <>
      <UserBubble>다음 내용이 맞아. 소장 작성해줘.</UserBubble>

      <AiCard>
        <button className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-bold text-[#170013] hover:bg-violet-50">
          ⬇ 생성한 서류 다운로드
        </button>
      </AiCard>
    </>
  );
}

function ChatInput({
  input,
  setInput,
  onSubmit,
  placeholder,
}: {
  input: string;
  setInput: (value: string) => void;
  onSubmit: () => void;
  placeholder: string;
}) {
  return (
    <div className="absolute bottom-14 left-1/2 w-full max-w-[920px] -translate-x-1/2 px-4">
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSubmit();
          }}
          placeholder={placeholder}
          className="h-12 flex-1 rounded-full border border-slate-200 bg-white/40 px-6 text-sm outline-none placeholder:text-slate-500 focus:border-violet-400"
        />

        <button
          onClick={onSubmit}
          className="h-12 w-[180px] rounded-full bg-violet-600 text-sm font-bold text-white shadow-lg shadow-violet-300"
        >
          제출하기
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-slate-500">
        혹시 변호사의 도움을 받고 싶으신가요?{" "}
        <span className="font-bold text-[#170013] underline">
          로이지가 엄선한 변호사 보러가기
        </span>
      </p>
    </div>
  );
}