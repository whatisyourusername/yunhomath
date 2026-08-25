export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#" className="text-lg font-bold tracking-tight">
            Yunho T Maths
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium sm:flex">
            <a href="#about" className="transition hover:text-gray-500">
              About
            </a>
            <a href="#classes" className="transition hover:text-gray-500">
              Classes
            </a>
            <a href="#contact" className="transition hover:text-gray-500">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-700"
          >
            상담 신청
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen items-center px-5 pb-16 pt-28 sm:px-8">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Text */}
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              1 : 1 Personalized Tutoring
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Learn smarter.
              <br />
              <span className="text-gray-400">Grow with confidence.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
              학생의 현재 실력과 목표를 바탕으로
              <br className="hidden sm:block" />
              개인에게 맞는 학습 방법을 함께 만들어갑니다.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-gray-900 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-gray-700"
              >
                상담 신청하기
              </a>

              <a
                href="#classes"
                className="rounded-full border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold transition hover:bg-gray-50"
              >
                수업 알아보기
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>✓ 1:1 맞춤 수업</span>
              <span>✓ 개인별 학습 계획</span>
              <span>✓ 목표 중심 학습</span>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100">
              {/* 나중에 선생님 사진으로 교체 */}
              <div className="flex h-full items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-200 text-2xl">
                    👤
                  </div>
                  <p className="text-sm">Profile Photo</p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-lg sm:-left-6">
              <p className="text-xs text-gray-400">PERSONALIZED</p>
              <p className="mt-1 font-semibold">Your goals, your plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="border-t border-gray-100 bg-gray-50 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            About
          </p>

          <div className="mt-5 grid gap-8 lg:grid-cols-2">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              단순히 문제를 푸는 것을 넘어,
              <br />
              <span className="text-gray-400">스스로 공부하는 힘을 만듭니다.</span>
            </h2>

            <p className="max-w-xl text-base leading-8 text-gray-600">
              학생마다 필요한 공부 방법은 다릅니다.
              현재 수준을 파악하고 부족한 부분을 찾아,
              효율적인 학습 방향을 함께 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Classes */}
      <section id="classes" className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Classes
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            What I Teach
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "SAT ",
                description: "Mathematics",
              },
              {
                title: "AP",
                description: "Calculus AB/BC",
              },
              {
                title: "Subject SAT",
                description: "Mathematics 1,2",
              },
              {
                title: "AMC 10/12",
                description: "American Mathematics Contest",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 p-6 transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-gray-900 px-5 py-24 text-white sm:px-8"
      >
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            Contact
          </p>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
            Let's start your journey.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            수업에 대해 궁금한 점이 있다면 편하게 문의해주세요.
            학생의 목표와 상황에 맞는 수업 방향을 함께 이야기해보겠습니다.
          </p>

          <a
            href="https://open.kakao.com/o/s7KrRsJi"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
          >
            문의하기
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 px-5 py-8 text-center text-sm text-gray-500">
        © 2026 YOUR NAME. All rights reserved.
      </footer>
    </main>
  );
}