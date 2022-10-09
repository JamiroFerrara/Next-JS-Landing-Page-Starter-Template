
type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {

  return (
    <div className="main-button">
      {props.children}

    </div>
  );
};

export { Button };
