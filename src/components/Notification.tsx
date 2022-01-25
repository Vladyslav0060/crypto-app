import { notification } from "antd";
interface INotification {
  message: string;
  description?: string;
  duration?: number;
}
const Notification = (props: INotification) => {
  notification.config({ duration: props.duration || 3 });
  notification.open({
    message: props.message,
    description: props.description,
  });
};

export default Notification;
