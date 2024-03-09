import { Request, Response } from "express";
import ArticleService from "../services/ArticleService";
import { articleValidator } from "../validator/ArticleValidator";

export default new (class ArticleControllers {
  ///////////////// CREATE /////////////////
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;

      const { error, value } = articleValidator.validate(data);

      if (error)
        return res.status(400).json({ message: error.details[0].message });

      await ArticleService.create(value);

      return res
        .status(200)
        .json({ message: "Create data Article Success", data });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// FIND /////////////////
  async find(req: Request, res: Response): Promise<Response> {
    try {
      const article = await ArticleService.find();

      return res.status(200).json(article);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// GET /////////////////
  async getOne(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const article = await ArticleService.getOne(id);

      return res.status(200).json(article);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// DELETE /////////////////
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      await ArticleService.delete(id);
      return res.status(200).json({ message: "Delete Article Success" });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }

  ///////////////// UPDATE /////////////////
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id);
      const { body } = req;
      await ArticleService.update(body, id);
      return res
        .status(200)
        .json({ message: "Update Article Success", data: { id: id, ...body } });
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Server Error", serverMessage: error });
    }
  }
})();
