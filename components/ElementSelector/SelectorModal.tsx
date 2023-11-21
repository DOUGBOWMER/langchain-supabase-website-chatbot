import styles from '@/styles/SelectorModal.module.css';

const Selectormodal = ({
  color = '#fff',
  style = 'small',
}: {
  color: string;
  style: string;
}) => {
  return (
    <span className={style == 'small' ? styles.loading2 : styles.loading}>
      <span />
      <span />
      <span />
    </span>
  );
};

export default Selectormodal;

Selectormodal.defaultProps = {
  style: 'small',
};
