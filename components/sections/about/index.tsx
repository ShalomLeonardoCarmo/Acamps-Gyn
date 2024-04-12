export function AboutSection() {
  return (
    <section className="p-2 bg-zinc-100 w-fit flex flex-col max-w-4xl gap-4 items-center justify-center rounded-xl shadow-lg">
      <h2 className="text-5xl font-bold text-center text-purple-700">
        Acamp&apos;s Gyn
      </h2>
      <div className="grid sm:grid-cols-2 sm:divide-x-2">
        <div className="p-2 flex flex-col font-semibold text-orange-400">
          <span className="font-bold">É impossível descrever!</span>
          <span>Com certeza, serão as melhores férias da sua vida!</span>
          <br />
          <span>
            Bem-vindos a uma aventura única e inesquecível, onde a diversão e a
            amizade se unem como nunca antes. Prepare-se para o evento mais
            épico do ano.
          </span>
          <span>
            {' '}
            - Acamp&apos;s 2024, trazido a você pela Comunidade Católica Shalom!
          </span>
          <br />
          <span className="font-bold">
            EM BREVE AS ATRAÇÕES SERÃO DIVULGADAS
          </span>
        </div>
        <div className="p-2 flex flex-col font-semibold text-orange-400">
          <span>Testando</span>
        </div>
      </div>
    </section>
  )
}
