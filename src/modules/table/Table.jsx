import Participants from './participants/Participants';
import './table.scss';

export default function Table({ trigger }) {
  return (
    <>
      <div className="table">
        <ul className="table__left">
          <li>ХОД</li>
          <li>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</li>
          <li>
            Наличия комплекса мероприятий, повышающих стандарты качества
            изготовления
          </li>
          <li>Срок изготовления лота, дней</li>
          <li>Гарантийные обязательства, мес.</li>
          <li>Условия оплаты</li>
          <li>Стоимость изготовления лота, руб. (без НДС)</li>
        </ul>
        <Participants trigger={trigger} />
      </div>
      <div>действия</div>
    </>
  );
}
