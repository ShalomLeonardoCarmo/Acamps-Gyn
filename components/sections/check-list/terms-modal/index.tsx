import Modal from '@/components/modal'
import Link from 'next/link'
import { MdClose, MdDownload } from 'react-icons/md'

interface TermsModalProps {
  onClose: () => void
  show: boolean
}

export default function TermsModal(props: TermsModalProps) {
  return (
    <Modal onClose={props.onClose} open={props.show}>
      <div className="bg-white p-2 rounded-xl flex flex-col gap-2 items-center justify-center">
        <span className="text-red-600 font-bold text-xl">
          TERMOS DE AUTORIZAÇÃO
        </span>
        <div className="divide-y gap-2 flex flex-col">
          <span className="flex gap-2 items-center">
            Termo para MENORES de idade:
            <Link
              target="_blank"
              href="/Maior-%20TERMO%20DE%20AUTORIZA%C3%87%C3%83O%20DE%20USO%20DE%20IMAGEM,%20VOZ%20E%20NOME.pdf"
              className="bg-red-600 p-1 rounded-xl gap-1 flex text-yellow-200 items-center justify-center text-lg font-semibold"
            >
              <MdDownload />
              Clique aqui
            </Link>
          </span>

          <span className="flex gap-2 items-center pt-2">
            Termo para MAIORES de idade:
            <Link
              target="_blank"
              href="/Menor-%20TERMO%20DE%20AUTORIZA%C3%87%C3%83O%20DE%20USO%20DE%20IMAGEM,%20VOZ%20E%20NOME.pdf"
              className="bg-red-600 p-1 rounded-xl gap-1 flex text-yellow-200 items-center justify-center text-lg font-semibold"
            >
              <MdDownload />
              Clique aqui
            </Link>
          </span>
        </div>

        <button
          type="button"
          onClick={() => props.onClose()}
          className="transition-all flex gap-1 items-center border border-red-600 hover:bg-red-600 text-red-600 hover:text-yellow-200 font-semibold text-lg p-1 rounded-xl"
        >
          <MdClose size={20} />
          fechar
        </button>
      </div>
    </Modal>
  )
}
