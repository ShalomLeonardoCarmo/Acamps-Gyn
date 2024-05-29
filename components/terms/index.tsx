'use client'
import { MdCheckCircleOutline, MdOutlineCancel } from 'react-icons/md'
import Modal from '../modal'

interface TermsProps {
  show: boolean
  onClose: () => void
  accept: boolean
  setAccept: (value: boolean) => void
}

export default function TermsModal(props: TermsProps) {
  function handleClose() {
    props.onClose()
  }

  return (
    <Modal onClose={handleClose} open={props.show}>
      <div className="bg-red-50 overflow-auto max-h-[90vh] divide-y rounded-xl w-full max-w-[95vw] md:max-w-[730px] lg:max-w-[1000px]">
        <div className="flex flex-col text-center font-semibold p-2">
          <span className="font-bold text-lg">
            Termo de autorização de uso de imagem, voz e nome para maiores de
            idade
          </span>
          <span>
            para participar do acamp&apos;s, nós pedimos que os participantes
            leiam e aceitem os termos de autorização, pois durante o retiro são
            tiradas algumas fotos para divulgação do evento nas redes sociais.
          </span>
        </div>
        <div className="flex w-full">
          <span className="p-2 text-center font-semibold text-lg">
            <strong>AUTORIZO</strong>, a título gratuito, o uso e a reprodução
            de minha imagem, do som da minha voz e do meu nome, em favor da
            COMUNIDADE CATÓLICA SHALOM, inscrita no CNPJ sob o N°
            07.044.456/0001-00, com endereço à Rua Maria Tomásia, no 72,
            Aldeota, CEP: 60.150-170, Fortaleza/CE, ou a quem esta expressamente
            autorizar, para que sejam Expostos e Divulgados em qualquer Veículo
            de Comunicação, inclusive redes sociais, em Publicidades, Campanhas
            Institucionais, Eventos, Vídeos, Fotos, CDs e DVDs, Tótens,
            Adesivos, impressos em geral, Livros, Revistas e Cartazes, inclusive
            em seu site e na Internet, para fins de divulgação do evento Acamps
            em todo território nacional, pelo prazo de 05 (cinco) anos, podendo
            ser renovado automaticamente por igual período – caso não haja
            manifestação contrária das partes, a contar da assinatura do
            presente instrumento contratual, tanto para o Brasil como para
            outros países. A presente DECLARAÇÃO vem assinada pelas testemunhas
            abaixo, que a tudo assistiram e para que produza seus legais
            efeitos.
          </span>
        </div>
        <div className="flex p-1 items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              props.setAccept(true)
              props.onClose()
            }}
            className="disabled:bg-red-800
            bg-red-600 flex items-center justify-center
            gap-1 p-2 rounded-xl font-bold text-yellow-200
            transition-all hover:bg-red-800 text-base"
          >
            <MdCheckCircleOutline size={25} />
            ACEITAR
          </button>
          <button
            type="button"
            onClick={() => {
              props.setAccept(false)
              props.onClose()
            }}
            className="
              border border-red-500 flex items-center
              justify-center gap-2 p-2 font-semibold text-red-600 rounded-xl
              transition-all
              hover:bg-red-600
              hover:text-yellow-200
              hover:bg-opacity-90
            "
          >
            <MdOutlineCancel size={25} />
            RECUSAR
          </button>
        </div>
      </div>
    </Modal>
  )
}
