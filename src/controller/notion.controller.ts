import { Router } from 'express';
import apiService from '../service/api.service';

const router = Router();

router.get('/search', async (req, res) => {
  try {
    const { data } = await apiService.post('/search', {
      "query":"External tasks",
      "filter": {
          "value": "database",
          "property": "object"
      },
      "sort":{
        "direction":"ascending",
        "timestamp":"last_edited_time"
      }
    });
    return res.status(200).json({ message: 'success', search: data });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: 'server error',
    });
  }
});

export default router;
