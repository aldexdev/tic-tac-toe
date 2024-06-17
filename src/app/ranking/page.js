"use client";

import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { getRanking } from "@/lib/apiCalls";
import { useRouter } from "next/navigation";

export default function Component() {
  const [ranking, setRanking] = useState({});
  const router = useRouter();

  useEffect(() => {
    getRankingData();
  }, []);

  const getRankingData = async () => {
    const rankingData = await getRanking();
    setRanking(rankingData);
  };

  const safeSum = (a, b, c) => {
    return (a || 0) + (b || 0) + (c || 0);
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
              <td className="px-4 py-3 text-right">{ranking?.playerX?.won}</td>
              <td className="px-4 py-3 text-right">{ranking?.playerX?.lost}</td>
              <td className="px-4 py-3 text-right">{ranking?.playerX?.tied}</td>
              <td className="px-4 py-3 text-right">
                {safeSum(
                  ranking?.playerX?.won +
                    ranking?.playerX?.lost +
                    ranking?.playerX?.tied
                )}
              </td>
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
              <td className="px-4 py-3 text-right">{ranking?.playerO?.won}</td>
              <td className="px-4 py-3 text-right">{ranking?.playerO?.lost}</td>
              <td className="px-4 py-3 text-right">{ranking?.playerO?.tied}</td>
              <td className="px-4 py-3 text-right">
                {safeSum(
                  ranking?.playerO?.won +
                    ranking?.playerO?.lost +
                    ranking?.playerO?.tied
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button
        text="Volver a Jugar"
        action={(e) => {
          e.preventDefault();
          router.push("/");
        }}
      />
    </div>
  );
}
