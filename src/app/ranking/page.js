"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  const playAgain = () => {
    router.push("/");
  };

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h1 className="font-bold mb-4 md:mb-0">Ranking</h1>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="w-[200px] px-4 py-3 text-left font-bold">
                Jugador
              </th>
              <th className="px-4 py-3 text-right font-bold">Victorias</th>
              <th className="px-4 py-3 text-right font-bold">Derrotas</th>
              <th className="px-4 py-3 text-right font-bold">Empates</th>
              <th className="px-4 py-3 text-right font-bold">PJs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 font-medium">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <span>U</span>
                  </div>
                  <span>Usuario</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right">24</td>
              <td className="px-4 py-3 text-right">12</td>
              <td className="px-4 py-3 text-right">6</td>
              <td className="px-4 py-3 text-right">42</td>
            </tr>
            <tr>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                    <span>IA</span>
                  </div>
                  <span>IA</span>
                </div>
              </td>
              <td className="px-4 py-3 text-right">18</td>
              <td className="px-4 py-3 text-right">15</td>
              <td className="px-4 py-3 text-right">9</td>
              <td className="px-4 py-3 text-right">42</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button text="Volver a Jugar" action={playAgain} />
    </div>
  );
}
