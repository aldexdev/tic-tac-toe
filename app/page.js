export default function Home() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className="flex flex-col items-center">
        <div className="text-center text-2xl font-semibold">
          <p>xTurn</p>
        </div>
        <div className="grid grid-cols-[repeat(3,1fr)] gap-2">
          {[...Array(9)].map((v, idx) => {
            return (
              <div
                key={idx}
                className="bg-[#eee] shadow-[0px_4px_#ddd] text-center text-[64px] leading-[100px] font-[bold] w-[100px] h-[100px] cursor-pointer rounded-lg"
              >
                X
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
