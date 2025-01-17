import { useFormik } from "formik";
import * as Yup from "yup";

function CommentForm({ onSubmit }) {
  const formik = useFormik({
    initialValues: {
      username: "",
      rating: 5,
      remarks: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required."),
      rating: Yup.number()
        .min(1, "Rating must be at least 1.")
        .max(5, "Rating must be at most 5.")
        .required("Rating is required."),
      remarks: Yup.string().required("Remarks cannot be empty."),
    }),
    onSubmit: (values, { resetForm }) => {
      onSubmit(values);
      resetForm();
    },
  });

  return (
    <div className="commentForm">
      <h2>Give a Comment!</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Full Name: &nbsp;
          <input
            type="text"
            name="username"
            value={formik.values.username}
            placeholder="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          &nbsp;
          {formik.touched.username && formik.errors.username && (
            <p className="error">{formik.errors.username}</p>
          )}
        </label>
        <label>
          Ratings: &nbsp;
          <input
            type="number"
            name="rating"
            value={formik.values.rating}
            placeholder="5"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          &nbsp;
          {formik.touched.rating && formik.errors.rating && (
            <p className="error">{formik.errors.rating}</p>
          )}
        </label>
        <label>
          Remark: &nbsp;
          <textarea
            name="remarks"
            value={formik.values.remarks}
            placeholder="Write Remark"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></textarea>
          &nbsp;
          {formik.touched.remarks && formik.errors.remarks && (
            <p className="error">{formik.errors.remarks}</p>
          )}
        </label>
        <button type="submit">Add Comments</button>
      </form>
    </div>
  );
}

export default CommentForm;
