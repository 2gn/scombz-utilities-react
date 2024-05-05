import { Button, Box, TextField } from "@mui/material";
import { useState, useEffect, useCallback } from "react";
import { AutoComplete } from "./AutoComplete";
import { Modal } from "./Modal";
import type { RuntimeMessage } from "~background";
import type { Task } from "~contents/types/task";
import type { Saves } from "~settings";
import { defaultSaves } from "~settings";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  onClose: (task?: Task) => void;
};
export const OriginalTaskModal = (props: Props) => {
  const { isOpen: open, setIsOpen, onClose = () => {} } = props;
  const [subjects, setSubjects] = useState<string[]>([]);

  const [taskName, setTaskName] = useState<string>("");
  const [taskURL, setTaskURL] = useState<string>("");
  const [subjectName, setSubjectName] = useState<string>("");
  const [subjectURL, setSubjectURL] = useState<string>("");
  const [taskDate, setTaskDate] = useState<string>("");
  const [taskTime, setTaskTime] = useState<string>("00:00");

  useEffect(() => {
    chrome.storage.local.get(defaultSaves, (currentData: Saves) => {
      const subjectArray = currentData.scombzData.timetable.map((d) => d.name);
      const subjectSet = new Set(subjectArray);
      setSubjects(Array.from(subjectSet));
    });
  }, []);

  const onChangeSubject = useCallback(
    (value: string) => {
      setSubjectName(value);
      const subject = subjects.find((s) => s === value);
      if (!subject) return;
      chrome.storage.local.get(defaultSaves, (currentData: Saves) => {
        const subjectData = currentData.scombzData.timetable.find((d) => d.name === subject);
        if (subjectData) {
          setSubjectURL("https://scombz.shibaura-it.ac.jp/lms/course?idnumber=" + subjectData.id);
        }
      });
    },
    [subjects],
  );

  const submit = () => {
    if (!taskName || !taskDate || !subjectName) {
      alert("必須項目を入力してください。必須項目は課題名、科目名、提出期限です。");
      return;
    }
    const task: Task = {
      kind: "originalTask",
      course: subjectName,
      title: taskName,
      link: taskURL,
      deadline: taskDate + (taskTime ? " " + taskTime : ""),
      id: new Date().getTime().toString(),
      courseURL: subjectURL,
    };
    chrome.storage.local.get(defaultSaves, (currentData: Saves) => {
      currentData.scombzData.originalTasklist.push(task);
      chrome.storage.local.set(currentData, () => {
        setIsOpen(false);
        onClose({ ...task, deadlineDate: new Date(task.deadline) } as Task);
        alert("課題を追加しました。");
        setTimeout(() => {
          chrome.runtime.sendMessage({ action: "updateBadgeText" } as RuntimeMessage);
          setSubjectName("");
          setSubjectURL("");
          setTaskName("");
          setTaskURL("");
          setTaskDate("");
          setTaskTime("00:00");
        }, 500);
      });
    });
  };

  return (
    <Modal title="自作課題追加" isOpen={open} setIsOpen={setIsOpen} onClose={onClose}>
      <Box display="flex" flexDirection="column" px={1} sx={{ gap: 1 }}>
        <AutoComplete options={subjects} onChange={onChangeSubject} label="科目名" required />
        <TextField
          label="科目URL"
          variant="outlined"
          size="small"
          fullWidth
          value={subjectURL}
          onChange={(e) => setSubjectURL(e.target.value)}
        />
        <TextField
          label="課題名"
          variant="outlined"
          size="small"
          fullWidth
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
        <TextField
          label="課題URL"
          variant="outlined"
          size="small"
          fullWidth
          value={taskURL}
          onChange={(e) => setTaskURL(e.target.value)}
        />
        <Box display="flex" gap={1} justifyContent="center">
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            style={{ width: "calc(50% - 5px)", height: 30 }}
            required
          />
          <input
            type="time"
            value={taskTime}
            onChange={(e) => setTaskTime(e.target.value)}
            style={{ width: "calc(50% - 5px)", height: 30 }}
          />
        </Box>
        <Button variant="contained" color="primary" onClick={submit}>
          タスクを追加
        </Button>
      </Box>
    </Modal>
  );
};