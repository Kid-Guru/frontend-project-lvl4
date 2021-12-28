import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { store } from '../../store';
import './styles.scss';

const ChatPage = observer(() => {
  useEffect(() => {
    store.getInitialData();
  }, []);

  return (
    <div className="chat-app">
      <div className="people-list">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <ul className="list-unstyled chat-list mt-2 mb-0">
          {store.channels.map((channel) => {
            return (
              <li key={channel.id} className={`${channel.id === store.currentChannelId ? 'active' : ''}`}>
                <div className="about">
                  <div className="name">{channel.name}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="chat">
        <div className="chat-header">
          <div className="row">
            <div className="col-lg-6">
              <div className="chat-about">
                <h6 className="mb-0">{store.currentChannelName}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-history">
          <ul>
            {store.messagesList.map((c) => {
              return (
                <li key={c.id} className={`history-item ${c.isOwn ? 'my' : 'other'}`}>
                  <div className="message-data">
                    <span className="message-data-time">{c.author}</span>
                  </div>
                  <div className="message">{c.message}</div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="chat-message">
          <div className="input-group mb-0">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </div>
            <input type="text" className="form-control" placeholder="Введите сообщение..." />
          </div>
        </div>
      </div>
    </div>
  );
});

export { ChatPage };
