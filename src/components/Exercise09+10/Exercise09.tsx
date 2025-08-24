import React, { Component } from "react";
import "./exercise09.css";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

interface State {
  tasks: Task[];
  input: string;
  error: string;
  modalTask: Task | null;
  editName: string;
  showDeleteModal: boolean;
  taskToDelete: Task | null;
}

export default class TodoList extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      tasks: [],
      input: "",
      error: "",
      modalTask: null,
      editName: "",
      showDeleteModal: false,
      taskToDelete: null,
    };
  }

  componentDidMount() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      this.setState({ tasks: JSON.parse(savedTasks) });
    }
  }

  componentDidUpdate(_: object, prevState: State) {
    if (prevState.tasks !== this.state.tasks) {
      localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
    }
  }

  handleAddTask = () => {
    if (!this.state.input.trim()) {
      this.setState({ error: "Tên công việc không được để trống!" });
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      name: this.state.input,
      completed: false,
    };

    this.setState((prev) => ({
      tasks: [...prev.tasks, newTask],
      input: "",
      error: "",
    }));
  };

  handleDeleteConfirm = () => {
    const { taskToDelete } = this.state;
    if (taskToDelete) {
      this.setState((prev) => ({
        tasks: prev.tasks.filter((t) => t.id !== taskToDelete.id),
        showDeleteModal: false,
        taskToDelete: null,
      }));
    }
  };

  handleEdit = (task: Task) => {
    this.setState({ modalTask: task, editName: task.name, error: "" });
  };

  handleUpdate = () => {
    if (!this.state.editName.trim()) {
      this.setState({ error: "Tên công việc không được để trống!" });
      return;
    }

    this.setState((prev) => ({
      tasks: prev.tasks.map((t) =>
        t.id === prev.modalTask?.id ? { ...t, name: prev.editName } : t
      ),
      modalTask: null,
      editName: "",
      error: "",
    }));
  };

  toggleComplete = (id: number) => {
    this.setState((prev) => ({
      tasks: prev.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    }));
  };

  render() {
    const {
      tasks,
      input,
      modalTask,
      editName,
      error,
      showDeleteModal,
    } = this.state;
    const completedCount = tasks.filter((t) => t.completed).length;

    return (
      <div className="container">
        <h2>Danh sách công việc</h2>
        <input
          value={input}
          onChange={(e) => this.setState({ input: e.target.value })}
          placeholder="Nhập tên công việc"
        />
        <button onClick={this.handleAddTask}>Thêm</button>
        {error && <p className="error">{error}</p>}

        <ul>
          {tasks.map((t) => (
            <li key={t.id}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => this.toggleComplete(t.id)}
              />
              <span
                style={{ textDecoration: t.completed ? "line-through" : "" }}
              >
                {t.name}
              </span>
              <button onClick={() => this.handleEdit(t)}>✏️</button>
              <button
                onClick={() =>
                  this.setState({ showDeleteModal: true, taskToDelete: t })
                }
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>

        {completedCount === tasks.length && tasks.length > 0 ? (
          <div className="alert-success">Hoàn thành công việc</div>
        ) : (
          <p>
            Công việc đã hoàn thành: {completedCount} / {tasks.length}
          </p>
        )}

        {/* Modal chỉnh sửa */}
        {modalTask && (
          <div className="modal">
            <div className="modal-content">
              <h3>Cập nhật công việc</h3>
              <input
                value={editName}
                onChange={(e) => this.setState({ editName: e.target.value })}
              />
              <div className="modal-actions">
                <button onClick={() => this.setState({ modalTask: null })}>
                  Hủy
                </button>
                <button onClick={this.handleUpdate}>Đồng ý</button>
              </div>
            </div>
          </div>
        )}

        {/* Modal xác nhận xóa */}
        {showDeleteModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Bạn có chắc muốn xóa?</h3>
              <div className="modal-actions">
                <button
                  onClick={() =>
                    this.setState({
                      showDeleteModal: false,
                      taskToDelete: null,
                    })
                  }
                >
                  Hủy
                </button>
                <button onClick={this.handleDeleteConfirm}>Xóa</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
