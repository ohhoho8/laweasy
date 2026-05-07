export default function Home() {
  return (
    <div className="flex min-h-full items-center justify-center pt-8">
      <section className="w-[720px] rounded-[22px] bg-white px-20 py-12 shadow-sm">
        <h1 className="text-center text-4xl font-bold text-[#170013]">
          로이지 AI 시작하기
        </h1>

        <div className="mt-7 flex items-center justify-center gap-2 text-2xl font-bold text-[#170013]">
          <span>로이지 AI 사용 예시 알아보기</span>
          <span className="text-xl">⌄</span>
        </div>

        <div className="mt-5 space-y-2">
          <button className="w-full rounded-full border border-slate-200 px-10 py-4 text-left text-lg leading-relaxed text-slate-500">
            친구한테 2023년 5월 500만 원을 빌려 주었는데 아직도 못 받고 있습니다.
            어떻게 하면 돌려받을 수 있나요?
          </button>

          <button className="w-full rounded-full border border-slate-200 px-10 py-4 text-left text-lg leading-relaxed text-slate-500">
            나쁜 주식회사와 2024년 6월 1일에 용역계약을 체결했는데 대금
            3,000만 원을 지불하지 않고 있습니다.
          </button>
        </div>

        <div className="mt-9 border border-slate-200 px-8 py-5 text-center text-lg leading-9 text-slate-500">
          자사 LawEasy는 수집가능한 법률문서 데이터, 법령, 판례를 기초로
          <br />
          일반적인 상황에 대한 법률문서를 제공하고 있으며,
          <br />
          로이지 AI로 생성된 실제 구체적 사안에 대한 최종 사용에 대한
          <br />
          유효 등에 대한 보장이나 책임을 지지 않습니다.
        </div>

        <label className="mt-5 flex cursor-pointer items-center justify-center gap-3 text-xl font-bold text-violet-600">
          <input
            type="checkbox"
            className="h-6 w-6 rounded border-slate-300 accent-violet-600"
          />
          <span>(필수) 개인정보 수집 및 처리 동의</span>
        </label>

        <div className="mt-5 flex justify-center">
          <button className="w-[270px] rounded-full bg-zinc-100 py-3 text-xl font-bold text-[#170013]">
            동의합니다
          </button>
        </div>
      </section>
    </div>
  );
}