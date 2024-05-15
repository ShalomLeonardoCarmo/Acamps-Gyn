'use client'

import { useState } from 'react'
import TermsModal from './terms-modal'

export function CheckListSection() {
  const [showTerms, setShowTerms] = useState(false)

  return (
    <section
      id="checklist"
      className="p-2 bg-zinc-100 flex flex-col w-full max-w-4xl gap-4 items-center justify-center rounded-xl shadow-lg"
    >
      <h2 className="text-5xl font-bold text-center text-red-600">
        Check-List
      </h2>

      <span className="text-center text-red-600 font-semibold">
        Dá uma conferida no que você vai precisar pra aproveitar da melhor forma
        esse acampamento!!
      </span>

      <div className="grid md:grid-cols-6 gap-x-2 md:grid-rows-2 grid-cols-1 divide-x divide-y">
        <div id="higiene-pessoal" className=" text-red-600 px-2 md:col-span-2">
          <h3 className="font-semibold text-center">1. Higiene Pessoal</h3>
          <div className="flex gap-1 items-center">
            <input
              id="shampoo"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="shampoo">Shampoo e Condicionador;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="sabonete"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="sabonete">Sabonete;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="escova"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="escova">
              Escova de dentes, pasta e fio dental;
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="cabelo"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="cabelo">Escova ou pente de cabelo;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="desodorante"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="desodorante">Desodorante;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="repelente"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="repelente">Repelente;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="colonia"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="colonia">Colonia ou Perfume;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="toalha"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="toalha">Toalha de banho.</label>
          </div>
        </div>

        <div id="roupas-meninas" className=" text-red-600 px-2 md:col-span-2">
          <h3 className="font-semibold text-center">
            2. Roupa para as meninas
          </h3>
          <div className="flex gap-1 items-center">
            <input
              id="missa"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="missa">
              4 Roupas para Santa Missa (vestidos mais longos, calças e blusas
              mais arrumadas);
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="lazer"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="lazer">
              2 pares de roupa confortáveis para o lazer (legging, camisa e
              tênis velhos);
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="dia-a-dia"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="dia-a-dia">
              3 pares de roupas confortáveis para usar durante o dia;
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="pijama"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="pijama">1 Pijama;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="meia"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="meia">2 Pares de Meia;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="chinelo"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="chinelo">
              1 Chinelo, 1 Tênis e 1 sandália/sapatilha;
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="casaco"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="casaco">1 Casaco ou Moletom;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="intima"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="intima">Roupa íntima e roupa de banho.</label>
          </div>
        </div>

        <div id="roupas-meninos" className=" text-red-600 px-2 md:col-span-2">
          <h3 className="font-semibold text-center">
            3. Roupa para os meninos
          </h3>
          <div className="flex gap-1 items-center">
            <input
              id="missa-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="missa-m">
              4 Roupas para Santa Missa (calças, camisas e sapatênis);
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="lazer-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="lazer-m">
              2 pares de roupa confortáveis para o lazer (bermudas, camisetas e
              tênis velhos);
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="dia-a-dia-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="dia-a-dia-m">
              3 pares de roupas confortáveis para usar durante o dia;
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="pijama-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="pijama-m">1 Pijama;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="meia-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="meia-m">2 Pares de Meia;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="chinelo-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="chinelo-m">
              1 Chinelo, 1 Tênis Velho e 1 Sapatênis;
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="casaco-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="casaco-m">1 Casaco ou Moletom;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="intima-m"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="intima-m">
              Roupas íntimas, bermuda e camiseta para banho.;
            </label>
          </div>
        </div>

        <div id="itens-pessoais" className=" text-red-600 px-2 md:col-span-3">
          <h3 className="font-semibold text-center">4. Itens Pessoais</h3>
          <div className="flex gap-1 items-center">
            <input
              id="biblia"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="biblia">
              Bíblia, caneta, terço e caderno para anotações;
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="agua"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="agua">Garrafa d&apos;água;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="remedio"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="remedio">
              Remédio de uso contínuo e documentos;
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="remedio"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="remedio">Chapéu ou Boné (opicionais);</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="lencol"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="lencol">Travesseiro e 2 lençóis;</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="oculos"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="oculos">Óculos de Sol (opcional);</label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="prato"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="prato">
              Prato, talheres e copo (preferencialmente de plástico);
            </label>
          </div>
          <div className="flex gap-1 items-center">
            <input
              id="ventilador"
              type="checkbox"
              className="accent-red-600 w-3 h-3"
            />
            <label htmlFor="ventilador">
              Ventilador (caso ache necessário).
            </label>
          </div>
        </div>
        <div
          id="itens-essenciais"
          className=" text-red-600 px-2 md:col-span-3 flex flex-col"
        >
          <h3 className="font-semibold text-center">5. Itens Essenciais</h3>
          <span>
            É obrigatório levar documentos e os termos abaixo assinados:
          </span>
          <button
            className="text-yellow-200 bg-red-600 transition-shadow rounded-xl text-lg font-bold hover:shadow-xl p-1"
            onClick={() => setShowTerms(true)}
          >
            Baixar os termos de autorização obrigatórios
          </button>
        </div>
      </div>

      <TermsModal onClose={() => setShowTerms(false)} show={showTerms} />
    </section>
  )
}
