import cls from "./AddQuestionPage.module.css";
import { Button } from "../../components/Button";

export const AddQuestionPage = () => {
  return (
    <>
      <h1 className={cls.formTitle}>Add new question</h1>

      <div className={cls.formContainer}>
        <form action="" className={cls.form}>
          <div className={cls.formControl}>
            <label htmlFor="questionField">Question: </label>
            <textarea
              name="question"
              id=""
              cols="30"
              rows="2"
              required
              placeholder="please enter a question"
              defaultValue={"default value"}
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="answerField">Short answer: </label>
            <textarea
              name="answer"
              id=""
              cols="30"
              rows="2"
              required
              placeholder="please enter a short answer"
              defaultValue={"default value"}
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="descriptionField">Description: </label>
            <textarea
              name="desription"
              id=""
              cols="30"
              rows="5"
              required
              placeholder="please enter a full description"
              defaultValue={"default value"}
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="resourcesField">Resources: </label>
            <textarea
              name="resources"
              id=""
              cols="30"
              rows="5"
              required
              placeholder="please enter resources separated by commas"
              defaultValue={"default value"}
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="levelField">Level: </label>
            <select name="level" id="levelField" defaultValue={"default value"}>
              <option value="" disabled>
                question level:
              </option>
              <hr />
              <option value="1">1 - ease</option>
              <option value="2">2 - medium</option>
              <option value="3">3 - hardest</option>
            </select>
          </div>

          <label htmlFor="clearFormFiled" className={cls.clearFormControl}>
            <input type="checkbox" name="clearFrom" id="clearFormFiled" defaultValue={true} className={cls.checkbox} />
            <span>Clear form after sunbmiting?</span>
          </label>

          <Button>Add question</Button>
        </form>
      </div>
    </>
  );
};
